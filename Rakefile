require 'rake'

desc 'Bootstrap the switch app'
task :bootstrap do
  title('Downloading and installing dependencies')
  sh 'sudo npm install'
  sh 'git submodule init && git submodule update'
  sh 'cd wiringPi && ./build && cd ..'
  sh 'cd rcswitch-pi && make send -lwiringPi && cd ..'
  title('All dependencies have been build. You are good to go!')
end

# Helpers
#-----------------------------------------------------------------------------#

def title(title)
  cyan_title = "\033[0;36m#{title}\033[0m"
  puts
  puts '-' * 60
  puts cyan_title
  puts '-' * 60
  puts
end
