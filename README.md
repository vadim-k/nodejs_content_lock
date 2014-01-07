nodejs_content_lock
===================

This is just a small proof of concept module.
The idea is to let users edit nodes locked by stale locks without having to wait when the lock times out or released by the lock owner.

When the user attempts to edit the node, a lock confirmation request is sent to the lock owner through a Node.js channel.
If the lock owner does not confirm the lock, the lock is released.