Since the server in our example has 1G of RAM, we will create a 1G file in this guide. Adjust this to meet the needs of your own server:

```sudo fallocate -l 1G /swapfile```

We can verify that the correct amount of space was reserved by typing:

```ls -lh /swapfile```

Output:

```-rw-r--r-- 1 root root 1.0G Apr 25 11:14 /swapfile```

Our file has been created with the correct amount of space set aside.

* Enabling the Swap File
Now that we have a file of the correct size available, we need to actually turn this into swap space.

First, we need to lock down the permissions of the file so that only users with root privileges can read the contents. This prevents normal users from being able to access the file, which would have significant security implications.

Make the file only accessible to root by typing:
```shell
sudo chmod 600 /swapfile
```
Verify the permissions change by typing:
```shell
ls -lh /swapfile
```
Output

```-rw------- 1 root root 1.0G Apr 25 11:14 /swapfile```


As you can see, only the root user has the read and write flags enabled.

We can now mark the file as swap space by typing:
```
sudo mkswap /swapfile
```
Output

``
Setting up swapspace version 1, size = 1024 MiB (1073737728 bytes)
no label, UUID=6e965805-2ab9-450f-aed6-577e74089dbf
``

After marking the file, we can enable the swap file, allowing our system to start using it:


``
sudo swapon /swapfile
``

Verify that the swap is available by typing:

``
sudo swapon --show
``
Output
```
NAME      TYPE  SIZE USED PRIO 
/swapfile file 1024M   0B   -2
```

We can check the output of the free utility again to corroborate our findings:

```free -h
Output
total        used        free      shared  buff/cache   available
Mem:          981Mi       123Mi       644Mi       0.0Ki       213Mi       714Mi
Swap:         1.0Gi          0B       1.0Gi
`````
Our swap has been set up successfully and our operating system will begin to use it as necessary.