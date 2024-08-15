# Use an official Node.js image with the desired version
FROM node:18

# Install necessary dependencies
RUN apt-get update && \
       apt-get install --no-install-recommends -y --fix-missing \
       curl \
       build-essential \
       git \
       libudev-dev && \
       rm -rf /var/lib/apt/lists/*

# Clone the solana-cookbook repository
RUN git clone https://github.com/solana-developers/solana-cookbook.git /app/solana-cookbook

# Set the working directory
WORKDIR /app/solana-cookbook

# Install Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Add Rust to PATH
ENV PATH="/root/.cargo/bin:${PATH}"

# Install both stable and nightly versions of Rust
RUN rustup install stable && \
    rustup install nightly

# Set the default Rust version (optional)
RUN rustup default nightly

# Install Node.js dependencies

# Install Solana CLI
RUN sh -c "$(curl -sSfL https://release.solana.com/v1.18.18/install)"

# Install Node.js dependencies
RUN yarn install

# Build the project
RUN yarn build

# Expose necessary ports (if applicable)
EXPOSE 3001

# Define the command to run your app
CMD ["yarn", "start"]
