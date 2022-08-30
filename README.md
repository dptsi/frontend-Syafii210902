# README #

Repository aplikasi web <b>NextJS Base</b>

### About ###

Aplikasi web menggunakan framework <b>[NextJS](https://nextjs.org/)</b> yang dapat digunakan sebagai rujukan atau basis pengembangan aplikasi web yang lain. Menggunakan framework <b>[NextJS v12.2.5](https://nextjs.org/)</b> dengan library <b>[next-auth](https://next-auth.js.org/) dan [@sentry/nextjs](https://www.npmjs.com/package/@sentry/nextjs)</b>.

### Usage ###

Langkah-langkah untuk menjalankan aplikasi menggunakan <b>Docker</b>.

Jika belum menjalankan <b>nginx reverse proxy</b> maka lakukan langkah-langkah berikut:

1. Pull github repository <b>dptsi/nginx-proxy</b>. 


	```bash
	
	git clone git@github.com:dptsi/nginx-proxy.git
	```
	
	
	atau 
	
	
	```bash
	
	git clone https://github.com/dptsi/nginx-proxy.git
	```

2. Buat docker network dengan nama <b>nginx-proxy-network</b>. 

	```bash
	docker network create --driver bridge nginx-proxy-network
	```

3. Jalankan docker compose di dalam direktori <b>nginx-proxy</b>. 

	```bash
	docker compose up -d
	```

Setelah nginx-proxy berjalan maka jalankan container <b>base-nextjs</b> dengan menjalankan langkah-langkah berikut:

1. Copy file <b>.env.example</b> menjadi <b>.env</b> di root folder

	```bash
	cp .env.example .env
	```

2. Di <b>root folder</b> jalankan perintah berikut. 

	```bash
	docker compose up -d
	```

3. Tambahkan private IP address PC development dan domain <b>nextjs.local</b> di <b>/etc/hosts</b> atau <b>C:\Windows\System32\etc\hosts</b> (pakai HostsMan).

4. Buka browser dan ketikkan <b>nextjs.local</b>

Mengkonfigurasikan Sentry pada project NextJS

1. Jalankan command untuk pengkonfigurasian Sentry secara otomatis

	```bash
	npx @sentry/wizard -i nextjs
	```

2. Lalu pilih <b>Repository Project</b> yang telah terdaftar pada <b>Bitbucket DPTSI</b> pada terminal