require 'httparty'
require 'nokogiri'

class Zamboni

  def self.get_standings
  # rails g scaffold Standings games:integer wins:integer losses:integer losses_ot:integer points:integer points_pct:integer goals:integer opp_goals:integer srs:integer sos:integer points_pct_old:integer ro_wins:integer
    page = HTTParty.get('http://www.hockey-reference.com/leagues/NHL_2017_standings.html')
    parse_page = Nokogiri::HTML(page)

    team_data = {}

    parse_page.css('.full_table').each do |d|
      hold_me = {}
      team = d.children.children.first.text

      12.times do |i|
        key = d.children[i+1].attribute('data-stat').value
        hold_me[key.to_sym] = d.children[i+1].text.to_i
      end

      team_data[team] = hold_me
    end

    return team_data
  end

    # # ------------------
    # # EXPANDED STANDINGS
    # # ------------------
  def self.get_expanded_standings
    expanded_team_data = {}

    60.times do |i|
      hold_me = {}

      if ( i == 0 || (i % 2 == 0) )
        # key = parse_page.css('#standings').first.children[6].children[i].children[1].attribute 'data-stat'
        key = parse_page.css('#standings').first.children[6].children[i].children[1].text

        parse_page.css('#standings').first.children[6].children[i].children.each do |d|
          key = d.attribute('data-stat').value
          hold_me[key.to_sym] = d.text
        end
        expanded_team_data[key] = hold_me
      end
    end

    return expanded_team_data
  end

    # ------------------
    # SKATERS
    # ------------------
  def self.get_skaters(total=5)
    page = HTTParty.get('http://www.hockey-reference.com/leagues/NHL_2017_skaters.html')
    parse_page = Nokogiri::HTML(page)

    player_data = {}
    # Max 1566
    total.times do |j|

      if ( j == 0 || j % 2 == 0)
        hold_me = {}

        # key = parse_page.xpath('//*[@id="stats"]').children[6].children[j].children[i].attribute('data-stat').value
        player_name = parse_page.xpath('//*[@id="stats"]').children[6].children[j].children[1].children.text

        27.times do |i|
          key = parse_page.xpath('//*[@id="stats"]').children[6].children[j].children[i].attribute('data-stat').value
          value = parse_page.xpath('//*[@id="stats"]').children[6].children[j].children[i].children.text
          hold_me[key.to_sym] = value
        end

        player_data[player_name] = hold_me
      end
    end

    return player_data
  end
end
