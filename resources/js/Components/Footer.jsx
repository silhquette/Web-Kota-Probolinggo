import { Link } from "@inertiajs/react";

export default function Footer() {
    const menuItemsLeft = [
        {
            title: "Badan Perencanaan Pembangunan Daerah dan Penelitian Pengembangan",
            link: "http://bappedalitbang.probolinggokota.go.id/",
        },
        {
            title: "Badan Kepegawaian dan Pengembangan SDM",
            link: "http://bkpsdm.probolinggokota.go.id/",
        },
        {
            title: "Badan Penanggulangan Bencana Daerah",
            link: "http://bpbd.probolinggokota.go.id/",
        },
        {
            title: "Badan Kesatuan Bangsa dan Politik",
            link: "https://bakesbangpol.probolinggokota.go.id/",
        },
        {
            title: "Badan Pendapatan, Pengelolaan Keuangan dan Aset Daerah",
            link: "http://bppkad.probolinggokota.go.id/",
        },
        {
            title: "Dinas Ketahanan Pangan, Pertanian dan Perikanan",
            link: "https://dpkpp.probolinggokota.go.id/",
        },
        {
            title: "Dinas Kesehatan, Pengendalian Penduduk dan Keluarga Berencana",
            link: "http://dinkesp2kb.probolinggokota.go.id/",
        },
        {
            title: "Dinas Kepemudaan, Olahraga dan Pariwisata",
            link: "https://dispopar.probolinggokota.go.id/",
        },
        {
            title: "Dinas Perhubungan",
            link: "http://dishub.probolinggokota.go.id/",
        },
        {
            title: "Dinas Komunikasi dan Informatika",
            link: "https://diskominfo.probolinggokota.go.id/",
        },
        {
            title: "Dinas Lingkungan Hidup",
            link: "http://dlh.probolinggokota.go.id/",
        },
        {
            title: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
            link: "https://dpmptsp.probolinggokota.go.id/",
        },
        {
            title: "Dinas Perpustakaan dan Kearsipan",
            link: "http://perpus-arsip.probolinggokota.go.id/",
        },
        {
            title: "Dinas Koperasi, Usaha Kecil dan Menengah dan Perdagangan",
            link: "http://dkump.probolinggokota.go.id/",
        },
        {
            title: "Dinas Perindustrian dan Tenaga Kerja",
            link: "https://disperinaker.probolinggokota.go.id/",
        },
        {
            title: "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak",
            link: "https://dinsospppa.probolinggokota.go.id/",
        },
        {
            title: "Dinas Pendidikan dan Kebudayaan",
            link: "https://dikbud.probolinggokota.go.id/",
        },
        {
            title: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
            link: "https://dpuprpkp.probolinggokota.go.id/",
        },
    ];

    const menuItemsMid = [
        {
            title: "Sekretariat Daerah Kota Probolinggo",
            link: "https://setda.probolinggokota.go.id/",
            children: [
                { title: "Bagian Pengadaan Barang dan Jasa", link: "http://bag-pbj.probolinggokota.go.id/" },
                { title: "Bagian Perekonomian dan Pembangunan", link: "https://bag-ekbang.probolinggokota.go.id/" },
                { title: "Bagian Hukum", link: "https://bag-hukum.probolinggokota.go.id/" },
                { title: "Bagian Kesejahteraan Rakyat", link: "http://bag-kesra.probolinggokota.go.id/" },
                { title: "Bagian Organisasi", link: "https://bag-organisasi.probolinggokota.go.id/" },
                { title: "Bagian Pemerintahan", link: "http://bag-pemerintahan.probolinggokota.go.id/" },
                { title: "Bagian Umum", link: "https://bag-umum.probolinggokota.go.id/" },
                { title: "Bagian Keuangan dan Sarana Prasarana", link: "https://bag-keusarpras.probolinggokota.go.id/" }
            ]
        },
        { title: "Inspektorat", link: "http://inspektorat.probolinggokota.go.id/", children: [] },
        { title: "Kantor Satpol. PP", link: "http://satpolpp.probolinggokota.go.id/", children: [] },
        { title: "RSUD Dr. Moch. Saleh", link: "http://rsud.probolinggokota.go.id/en/", children: [] },
        { title: "RSUD Ar Rozy", link: "https://rsud-arrozy.probolinggokota.go.id/", children: [] },
        { title: "Sekretariat Dewan", link: "https://setwan.probolinggokota.go.id/", children: [] },
        { title: "Sekretariat KPUD", link: "https://kota-probolinggo.kpu.go.id/", children: [] }
    ];    

    const menuItemsKecamatan = [
        { title: "Kecamatan Mayangan", link: "https://kec-mayangan.probolinggokota.go.id/" },
        { title: "Kecamatan Kedopok", link: "http://kec-kedopok.probolinggokota.go.id" },
        { title: "Kecamatan Wonoasih", link: "http://kec-wonoasih.probolinggokota.go.id/" },
        { title: "Kecamatan Kanigaran", link: "http://kec-kanigaran.probolinggokota.go.id/" },
        { title: "Kecamatan Kademangan", link: "http://kec-kademangan.probolinggokota.go.id/" }
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
                                    <a
                                        className="hover:text-amber-500"
                                        href={item.link}
                                    >
                                        {item.title}
                                    </a>
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
                                <>
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
                                        <a
                                            className="hover:text-amber-500"
                                            href={item.link}
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                    {item.children.length > 0 && item.children.map((child, index) => (
                                        <div key={index} className="flex gap-2 ml-6">
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
                                        <a
                                            className="hover:text-amber-500"
                                            href={child.link}
                                        >
                                            {child.title}
                                        </a>
                                    </div>
                                    ))}
                                </>
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
                                    <a
                                        className="hover:text-amber-500"
                                        href={item.link}
                                    >
                                        {item.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="basis-1/3 my-12 px-12 flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">
                            KONTAK PPID
                        </h2>
                        <div>
                            <div>Sekretariat kami berada di</div>
                            <div className="font-semibold">
                                Dinas Komunikasi dan Informatika Kota
                                Probolinggo
                            </div>
                            <div>Jl. Dr. Moch Saleh No. 05 Probolinggo</div>
                            <div>Telp/ Fax: (0335) 422135</div>
                            <div>E-Mail : diskominfo@probolinggokota.go.id</div>
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
            <div className="bg-blue-950 text-white w-full text-center py-4 text-sm font-light">
                <div>Diskominfo Kota Probolinggo 2024</div>
            </div>
        </>
    );
}
