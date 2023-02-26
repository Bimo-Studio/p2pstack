# p2p stack

## Purpose
There is a large audience of folks who have invested in web3 via various tokens, NFTs, etc.

## Stack 

### I2P
The Invisible Internet Project (https://geti2p.net/) provides an encrypted mixnet and a built-in web server. The reference implementation is in Java, but a port exists in C++ as well. It currently works on PCs, servers, and Android phones.




### IPFS
The Interplanetary File System (https://github.com/ipfs/ipfs) is a p2p network that has a content addressing model where the hash of the file is the address. Peers are queried for a copy of the file and if there is a match, the file is transferred. After the transfer is complete, the file is hashed and compared vs the address hash.

It is not recommended for particularly large files.

The reference implementation is in golang and runs primarily on PCs and servers.


### Hypercore
The Hypercore Protocol (formerly DAT, currently being reorganized under the 'holepunch' https://github.com/hypercore-protocol / https://docs.holepunch.to/) is a p2p network that provides a p2pswarm with unique NAT hole punching, a distributed file system, an append-only log, a B-tree, and a file sharing system.

It is currently used by https://keet.io/ as its core technology stack.

### WebTorrent

webtorrent.io is an in-browser library that has a sliding window retrieval of file segments. This allows for immediate media playback of very large files including movies.

From the load of the media player, webtorrent reaches out for peers
