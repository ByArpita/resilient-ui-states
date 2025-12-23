'use client'

import { useEffect, useState } from 'react'
import UserTable from '@/components/UserTable'
import LoadingState from '@/components/LoadingState'
import EmptyState from '@/components/EmptyState'
import ErrorState from '@/components/ErrorState'
import PartialStateBanner from '@/components/PartialStateBanner'

type User = { id: string; name: string; email: string; role: string }
type UIState = 'loading' | 'empty' | 'error' | 'partial' | 'success'

const STATES: UIState[] = ['loading', 'success', 'empty', 'partial', 'error']

export default function UsersPage() {
  const [users, setUsers] = useState<User[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [partial, setPartial] = useState(false)
  const [state, setState] = useState<UIState>('loading')

  const nextState = () => {
    const idx = STATES.indexOf(state)
    const next = STATES[(idx + 1) % STATES.length]
    setState(next)
  }

  useEffect(() => {
    let cancelled = false

    async function fetchUsers() {
      // reset per-run state
      setError(null)
      setUsers(null)
      setPartial(false)

      // If we are in "loading" state, just show the loading UI briefly,
      // then auto-advance to the next state (no API hit).
      if (state === 'loading') {
        setLoading(true)
        await new Promise((r) => setTimeout(r, 600))
        if (!cancelled) {
          setLoading(false)
          setState('success')
        }
        return
      }

      try {
        setLoading(true)
        const res = await fetch(`/api/users?state=${state}`)
        if (!res.ok) throw new Error('Failed to fetch users')
        const data: User[] = await res.json()

        if (cancelled) return
        setUsers(data)

        // partial if not all users loaded (keeping your original logic)
        setPartial(data.length > 0 && data.length < 3)
      } catch (err: any) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUsers()
    return () => {
      cancelled = true
    }
  }, [state])

  return (
    <div>
      <h3>Resilient UI States Playground</h3>
      {/* MAIN CONTENT */}
      {loading && <LoadingState />}
      {!loading && error && <ErrorState message={error} />}
      {!loading && !error && (!users || users.length === 0) && <EmptyState />}
      {!loading && !error && users && users.length > 0 && (
        <>
          {partial && <PartialStateBanner />}
          <UserTable users={users} />
        </>
      )}

      {/* BOTTOM BUTTON */}
      <div className='bottomButton'
      >
        <button onClick={nextState} className='next-button'>
          Next screen
        </button>
        <span>
          Current: <b>{state}</b>
        </span>
      </div>
    </div>
  )
}
