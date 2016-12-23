module StandingHelper
  def fetch_standings
    standings =  $redis.get("standings")
    if standings.nil?
      standings = Standing.all.to_json
      $redis.set("standings", standings)
    end
    @standings = JSON.load standings
  end
end
