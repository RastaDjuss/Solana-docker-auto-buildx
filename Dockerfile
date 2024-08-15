# Use a base image compatible with Mac Apple Darwin
FROM ubuntu:latest

# Update package lists and install necessary packages
RUN apt-get update && apt-get install -y curl build-essential libssl-dev libudev-dev pkg-config zlib1g-dev llvm git
RUN apt-get update && apt-get install -y protobuf-compiler
RUN apt-get update && apt-get install -y libclang-dev

# Install Rust and Cargo using rustup
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# Clone the Solana project
RUN git clone https://github.com/solana-labs/solana.git

WORKDIR /solana

# Set the LIBCLANG_PATH environment variable to point to the libclang library
ENV LIBCLANG_PATH=/usr/lib/x86_64-linux-gnu/

RUN git checkout master
RUN find / -name libclang.so

# Build the Solana project
RUN ./cargo build

# Test Solana
RUN ./cargo test

# Start the Solana application (if applicable)
CMD ["./solana"]
