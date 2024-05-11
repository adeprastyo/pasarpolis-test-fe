import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className="w-4/5 mx-auto p-5 flex flex-col gap-3">
        <div>
          <h1 className="text-xl font-medium">
            Front End Intern Technical Test
          </h1>
          <p>by Ade Prastyo</p>
        </div>

        <div className="flex flex-col gap-2 bg-[#3f3f3f] text-white p-5 rounded-xl mb-5">
          <h2 className="text-yellow-400 font-bold tracking-wider">
            1. Tebak Angka (Reactjs)
          </h2>
          <p>Deskripsi:</p>
          <p>
            Buatlah sebuah permainan sederhana "Tebak Angka" menggunakan Reactjs
            di mana pengguna harus menebak angka yang dihasilkan secara acak
            dalam rentang tertentu.
          </p>
          <p>Persyaratan:</p>
          <ol type="1">
            <li>
              1. Pengguna harus dapat memasukkan tebakan mereka ke dalam input
              teks.
            </li>
            <li>2. Harus ada tombol untuk submit tebakan.</li>
            <li>
              3. Setelah setiap tebakan, pengguna harus menerima feedback apakah
              tebakan mereka terlalu tinggi, terlalu rendah, atau benar.
            </li>
            <li>4. Tampilkan jumlah percobaan yang telah dilakukan. </li>
            <li>
              5. Izinkan pengguna untuk mengatur ulang permainan kapan saja.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-2 bg-[#3f3f3f] text-white p-5 rounded-xl mb-5">
          <h2 className="text-yellow-400 font-bold tracking-wider">
            2. Gallery Efek Hover & Transisi ( HTML + CSS )
          </h2>
          <p>Deskripsi:</p>
          <p>
            Buatlah galeri gambar di mana setiap gambar memiliki efek hover yang
            diimplementasikan menggunakan transisi CSS. Efek hover ini harus
            mengubah penampilan gambar secara visual ketika pengguna mengarahkan
            kursor ke atasnya.
          </p>
          <p>Persyaratan:</p>
          <ol type="1">
            <li>
              1. Buat struktur HTML untuk galeri, yang terdiri dari grid elemen
              gambar.
            </li>
            <li>
              2. gunakan styling CSS ke gambar untuk menentukan ukuran dan tata
              letak yang konsisten dalam grid.
            </li>
            <li>
              3. Implementasikan transisi CSS untuk menganimasikan perubahan
              dalam penampilan saat mengarahkan kursor ke gambar.
            </li>
            <li>
              4. Pastikan bahwa efek hover kembali ke keadaan aslinya saat
              kursor mouse bergerak keluar dari gambar.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
