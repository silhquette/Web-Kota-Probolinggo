import { Link } from "@inertiajs/react";

export default function Footer() {
    

    const menuItemsLeft = [
        {
            title: "Badan Perencanaan Pembangunan Daerah dan Penelitian Pengembangan",
            link: "",
        },
        { title: "Badan Kepegawaian dan Pengembangan SDM", link: "" },
        { title: "Badan Penanggulangan Bencana Daerah", link: "" },
        { title: "Badan Kesatuan Bangsa dan Politik", link: "" },
        {
            title: "Badan Pendapatan, Pengelolaan Keuangan dan Aset Daerah",
            link: "",
        },
        { title: "Dinas Ketahanan Pangan, Pertanian dan Perikanan", link: "" },
        {
            title: "Dinas Kesehatan, Pengendalian Penduduk dan Keluarga Berencana",
            link: "",
        },
        { title: "Dinas Kepemudaan, Olahraga dan Pariwisata", link: "" },
        { title: "Dinas Perhubungan", link: "" },
        { title: "Dinas Komunikasi dan Informatika", link: "" },
        { title: "Dinas Lingkungan Hidup", link: "" },
        {
            title: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
            link: "",
        },
        { title: "Dinas Perpustakaan dan Kearsipan", link: "" },
        {
            title: "Dinas Koperasi, Usaha Kecil dan Menengah dan Perdagangan",
            link: "",
        },
        { title: "Dinas Perindustrian dan Tenaga Kerja", link: "" },
        {
            title: "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak",
            link: "",
        },
        { title: "Dinas Pendidikan dan Kebudayaan", link: "" },
        {
            title: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
            link: "",
        },
    ];

    const menuItemsMid = [
        {
          title: "Sekretariat Daerah Kota Probolinggo",
          link: "",
          children: [
            { title: "Bagian Pengadaan Barang dan Jasa", link: "" },
            { title: "Bagian Perekonomian dan Pembangunan", link: "" },
            { title: "Bagian Hukum", link: "" },
            { title: "Bagian Kesejahteraan Rakyat", link: "" },
            { title: "Bagian Organisasi", link: "" },
            { title: "Bagian Pemerintahan", link: "" },
            { title: "Bagian Umum", link: "" },
            { title: "Bagian Keuangan dan Sarana Prasarana", link: "" }
          ]
        },
        { title: "Inspektorat", link: "" },
        { title: "Kantor Satpol. PP", link: "" },
        { title: "RSUD Dr. Moch. Saleh", link: "" },
        { title: "RSUD Ar Rozy", link: "" },
        { title: "Sekretariat Dewan", link: "" },
        { title: "Sekretariat KPUD", link: "" },
    ];

    const menuItemsKecamatan = [
        { title: "Kecamatan Mayangan", link: "" },
        { title: "Kecamatan Kedopok", link: "" },
        { title: "Kecamatan Wonoasih", link: "" },
        { title: "Kecamatan Kanigaran", link: "" },
        { title: "Kecamatan Kademangan", link: "" }
    ];
    
    const moreLinks = [
        { title: "Aturan/Perda", link: "http://jdih.probolinggokota.go.id/" },
        { title: "Daftar Informasi Publik (DIP)", link: "https://ppid.probolinggokota.go.id/layanan-informasi-publik/daftar-informasi-publik-skpd/" },
        { title: "Daftar Aset & Inventaris", link: "https://drive.google.com/file/d/0B6VAFxfTdYDhSWpSa3RPYVpjeXc/view" },
        { title: "Akses Informasi Publik", link: "https://ppid.probolinggokota.go.id/layanan-informasi-publik/akses-informasi-publik/" },
        { title: "Berita", link: "https://ppid.probolinggokota.go.id/category/berita-ppid/" },
        { title: "Informasi Publik", link: "https://ppid.probolinggokota.go.id/category/informasi-publik/" },
        
    ];

    return (
        <>
            <div className="border-t-4 border-amber-500 bg-blue-900 text-white w-full">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">
                    <div className="basis-1/3 my-12 px-12 flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">
                            LINK BADAN / DINAS
                        </h2>
                        <div>
                            {menuItemsLeft.map((item, index) => (
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right text-amber-500 min-w-[16px] mt-1"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M7 7l5 5l-5 5" />
                                        <path d="M13 7l5 5l-5 5" />
                                    </svg>
                                    <Link
                                        className="hover:text-amber-500"
                                        href={item.link}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="basis-1/3 my-12 px-12 flex flex-col gap-4 border-x border-gray-400">
                        <h2 className="text-xl font-semibold">
                            LINK BAGIAN / KANTOR
                        </h2>
                        <div>
                            {menuItemsMid.map((item, index) => (
                                <div key={index} className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right text-amber-500 min-w-[16px] mt-1"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M7 7l5 5l-5 5" />
                                        <path d="M13 7l5 5l-5 5" />
                                    </svg>
                                    <Link
                                        className="hover:text-amber-500"
                                        href={item.link}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-xl font-semibold">
                            LINK KECAMATAN
                        </h2>
                        <div>
                            {menuItemsKecamatan.map((item, index) => (
                                <div key={index} className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right text-amber-500 min-w-[16px] mt-1"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M7 7l5 5l-5 5" />
                                        <path d="M13 7l5 5l-5 5" />
                                    </svg>
                                    <Link
                                        className="hover:text-amber-500"
                                        href={item.link}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="basis-1/3 my-12 px-12 flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">
                            LINK BADAN / DINAS
                        </h2>
                        <div>
                            <div>Sekretariat kami berada di</div>
                            <div className="font-semibold">
                                Dinas Komunikasi dan Informatika Kota
                                Probolinggo
                            </div>
                            <div>Jalan : Dr. Saleh No. 05</div>
                            <div>telp : 0335-422135</div>
                        </div>
                        <div>
                            <div>Jam Layanan :</div>
                            <div>Senin – Kamis : 08.00 – 16.00 WIB</div>
                            <div>Istirahat : 12.00 – 13.00 WIB</div>
                            <div>Jum’at : 08.00 – 11.00 WIB</div>
                        </div>
                        <div>
                            <div>Desk Informasi :</div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right text-amber-500 min-w-[16px] mr-2 inline-block"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M7 7l5 5l-5 5" />
                                    <path d="M13 7l5 5l-5 5" />
                                </svg>
                                (0335) 422135
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right text-amber-500 min-w-[16px] mr-2 inline-block"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M7 7l5 5l-5 5" />
                                    <path d="M13 7l5 5l-5 5" />
                                </svg>
                                (0335) 420155
                            </div>
                        </div>
                        <div>
                            <div>atau dapat menghubungi kami melalui :</div>
                            <div>Gmail: ppidkotaprob@gmail.com</div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15813.442504779116!2d113.214!3d-7.751521000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ad966b64dca1%3A0x17ec2b0be0813a19!2sDiskominfo%20Kota%20Probolinggo!5e0!3m2!1sen!2sid!4v1723430564060!5m2!1sen!2sid" height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="bg-sky-950 text-white w-full text-center py-4 text-sm font-light">
                <div className="flex gap-4 justify-center w-full mb-4">
                    {moreLinks.map((item, index) => (
                        <Link className="bg-sky-900 px-6 py-2 rounded-full" key={index} href={item.link}>{item.title}</Link>
                    ))}
                </div>
                <div>Diskominfo Kota Probolinggo 2024</div>
            </div>
        </>
    );
}
