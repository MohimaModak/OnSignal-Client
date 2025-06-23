import React from 'react';
import telephone from "../../../Gallery/telephone.png"
import mail from "../../../Gallery/mail.png"
import globe from "../../../Gallery/globe.png"
import fax from "../../../Gallery/fax.png"

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-gray-300 py-10 px-6 lg:px-20 text-sm">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Legal Info */}
                <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Rechtliches</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Impressum</a></li>
                        <li><a href="#" className="hover:underline">Datenschutz</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Kontakt</h4>
                    <ul className="space-y-1">
                        <li className='flex items-center gap-5 pb-0.5'><img src={telephone} className='w-5' /> 09498 94 01-0</li>
                        <li className='flex items-center gap-5 pb-0.5'><img src={fax} className='w-5' /> 09498 94 01-99</li>
                        <li className='flex items-center gap-5 pb-0.5'><img src={mail} className='w-5' /> <a href="mailto:vg.laaber@vg-laaber.de" className="hover:underline">vg.laaber@vg-laaber.de</a></li>
                        <li className='flex items-center gap-5 pb-0.5'><img src={globe} className='w-5' /> <a href="https://www.markt-laaber.de" target="_blank" rel="noopener noreferrer" className="hover:underline">www.markt-laaber.de</a></li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Gemeinde</h4>
                    <ul className="space-y-1">
                        <li>Markt Laaber</li>
                        <li>Jakobstraße 9</li>
                        <li>93164 Laaber</li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Öffnungszeiten</h4>
                    <ul className="space-y-1">
                        <li>Mo–Fr: 08:00 – 12:00 Uhr</li>
                        <li>Do: 13:00 – 18:00 Uhr</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-xs text-cyan-300 mt-8">
                © {new Date().getFullYear()} Markt Laaber. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
}