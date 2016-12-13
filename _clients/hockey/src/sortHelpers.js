var sortBy = {
    games: function(data) {
        return data.sort(function(a, b) {
            return a.games - b.games }).reverse();
    },
    wins: function(data) {
        return data.sort(function(a, b) {
            return a.wins - b.wins }).reverse();
    },
    losses: function(data) {
        return data.sort(function(a, b) {
            return a.losses - b.losses }).reverse();
    },
    losses_ot: function(data) {
        return data.sort(function(a, b) {
            return a.losses_ot - b.losses_ot }).reverse();
    },
    points: function(data) {
        return data.sort(function(a, b) {
            return a.points - b.points }).reverse();
    },
    teams: function(data) {
        return data.sort(this.compare);
    },
    compare: function (a,b) {
      if (a.team_name < b.team_name)
        return -1;
      if (a.team_name > b.team_name)
        return 1;
      return 0;
    }
}

export default sortBy;
