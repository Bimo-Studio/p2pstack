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


## Use Case

Modern internet users are laregly unaware of the utility of p2p networks and their individual agency in participating in these networks.

p2pstack aims to give individuals a self-sovereign dApp platform with a good set of default built-in technologies. There is an emphasis on ease-of-use and giving users a simple experience reminiscent of the best parts of Napster and Geocities.

With p2pstack, individuals get to own their social graph and their core identity with plainspoken, point-and-click interfaces.

## User Flow

### Installation
An individual downloads the app to their laptop or desktop machine and starts the installer

The installer creates resilient services to operate I2P & IPFS. With the default webapp, the technologies involved include Hypercore protocol and WebTorrent.

At the end of install, a browser window is opened to the locally hosted product landing page.

### First Time User Experience

The individual, having just seen their browser open, is presented with a webpage that gives a brief welcome and explanation of the platform.

The core goals for this FTUE is to personalize their profile, create 1 piece of content, and to connect with 1 friend.

The individual should be able to record a short video and 'upload' it after filling out a simple description field.

The 'upload' functionality would copy the file to an appropriate shared folder, add the video to webtorrent, and the webserver would observe the change and add a card to the web page.

To personalize their profile, users are asked to add a nickname and a profile picture.

Once their profile is updated, the mapping of profile name to b32 address is gossiped to the p2p network.

Connecting with a friend is as simple as visiting their page and clicking on a 'follow' button.

Once a page is followed, the b32 address and nice name are added to the i2p local address book.


### Core Experience

The main page for the user's experience will use cards to display a link to unique webtorrents created by that user.  

The bottom of the page will include a chat system managed by hypercore protocol.
