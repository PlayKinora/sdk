export function claimReward(player, amount) {
  return {
    player,
    amount,
    status: "claimed"
  };
}
