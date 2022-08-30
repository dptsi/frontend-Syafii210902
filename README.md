# README #

Repository aplikasi web NextJS Base

### About ###

Aplikasi web menggunakan framework NextJS yang dapat digunakan sebagai rujukan atau basis pengembangan aplikasi web yang lain. Menggunakan framework NextJS v12.2.5 dengan library [next-auth](https://next-auth.js.org/).

### Usage ###

Langkah-langkah untuk menjalankan aplikasi menggunakan Docker.

Jika belum menjalankan nginx reverse proxy maka lakukan langkah-langkah berikut:

1. Pull github repository dptsi/nginx-proxy. 


	```bash
	
	git clone git@github.com:dptsi/nginx-proxy.git
	```
	
	
	atau 
	
	
	```bash
	
	git clone https://github.com/dptsi/nginx-proxy.git
	```

2. Buat docker network dengan nama nginx-proxy-network. 

	```bash
	docker network create --driver bridge nginx-proxy-network
	```

3. Jalankan docker compose di dalam direktori nginx-proxy. 

	```bash
	docker compose up -d
	```

Setelah nginx-proxy berjalan maka jalankan container base-nextjs dengan menjalankan langkah-langkah berikut:

1. Copy file .env.example menjadi .env di root folder

	```bash
	cp .env.example .env
	```

2. Di root folder jalankan perintah berikut. 

	```bash
	docker compose up -d
	```

3. Tambahkan private IP address PC development dan domain nextjs.local di /etc/hosts atau C:\Windows\System32\etc\hosts (pakai HostsMan).

8. Buka browser dan ketikkan nextjs.local