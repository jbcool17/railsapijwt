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
    }

}

export default sortBy;
