FROM gitpod/workspace-full-vnc

USER gitpod
RUN  sudo apt-get update && \
  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
  sudo apt-get install -qy \
    libgtk-3-dev libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 \
    libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
    ./google-chrome-stable_current_amd64.deb && \
  sudo rm -rf /var/lib/apt/lists/* && sudo rm google-chrome-stable_current_amd64.deb
