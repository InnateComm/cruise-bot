export const fetchOwners = () => {
  if (process.env.DISCORD_OWNER) {
    return [process.env.DISCORD_OWNER]
  }

  return []
}
