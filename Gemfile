# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.2"

gem "administrate", github: "excid3/administrate", branch: "zeitwerk"
gem "bootsnap", ">= 1.1.0", require: false
gem "bootstrap", "~> 4.3", ">= 4.3.1"
gem "devise", "~> 4.6", ">= 4.6.1"
gem "devise-bootstrapped", github: "excid3/devise-bootstrapped", branch: "bootstrap4"
gem "devise_masquerade", "~> 0.6.2"
gem "font-awesome-sass", "~> 5.6", ">= 5.6.1"
gem "friendly_id", "~> 5.2", ">= 5.2.5"
gem "gravatar_image_tag", github: "mdeering/gravatar_image_tag"
gem "haml-rails"
gem "mini_magick", "~> 4.9", ">= 4.9.2"
gem "name_of_person", "~> 1.1"
gem "omniauth-facebook", "~> 5.0"
gem "omniauth-github", "~> 1.3"
gem "omniauth-twitter", "~> 1.4"
gem "pg", ">= 0.18", "< 2.0"
gem "pry-rails"
gem "puma", "~> 3.11"
gem "rails", "~> 5.2.2", ">= 5.2.2.1"
gem "sass-rails", "~> 5.0"
gem "sidekiq", "~> 5.2", ">= 5.2.5"
gem "sitemap_generator", "~> 6.0", ">= 6.0.1"
gem "turbolinks", "~> 5"
gem "webpacker", "~> 4.0.1"
gem "whenever", require: false

group :development do
  gem "annotate"
  gem "bullet"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "rack-mini-profiler", require: false
  gem "rubocop"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara", ">= 2.15"
  gem "chromedriver-helper"
  gem "selenium-webdriver"
end

gem "tzinfo-data", platforms: %i(mingw mswin x64_mingw jruby)
