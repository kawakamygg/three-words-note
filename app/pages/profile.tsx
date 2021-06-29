import { useUser } from '@auth0/nextjs-auth0'

export default function Profile() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (user === undefined) return <div>User profile not found</div>
  const picture = user.picture
  const name = user.name
  return (
    user && (
      <div>
        <img
          src={picture !== null ? picture : ''}
          alt={name !== null ? name : ''}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  )
}
