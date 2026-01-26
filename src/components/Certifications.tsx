import React from 'react';
import { Award, Download, Eye, ExternalLink } from 'lucide-react';

const Certifications = () => {

  const certifications = [
     {
      title: "MongoDB Certified Developer Associate",
      description: "Validation of skills in MongoDB development, data modeling, and performance optimization.",
      issuer: "MongoDB University",
      date: "Jan 2025",
      verificationUrl: "https://www.credly.com/badges/74259da4-37a1-428c-a33c-0b33f562b88d/public_url",
      previewUrl: "/MongoDBAssociateDeveloper_Badge20260126-31-lieke0.pdf",
      downloadUrl: "https://drive.google.com/file/d/1aYF54a5KYbjltrDK_Fh7cHdTTB9n3kG8/view?usp=sharing",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Foundational Associate",
      description: "Validated understanding of Oracle Cloud Infrastructure services and foundational cloud concepts.",
      issuer: "Oracle",
      date: "Oct 2025",
      verificationUrl: "https://github.com/2300031018/Certificates/blob/main/OracleCloud.pdf",
      previewUrl: "/download.jpeg",
      downloadUrl: "https://drive.google.com/file/d/1bH0GyP83-b1L_zRDYE85XjASwqPEyk3j/view?usp=sharing",
    },
    {
      title: "SalesForce Certified AI Associate",
      description: "Demonstrated knowledge of AI concepts and Salesforce AI solutions.",
      issuer: "Salesforce",
      date: "Nov 2024",
      verificationUrl: "https://drive.google.com/file/d/1akdx9p_z_rYWuJvdKZ1DcG8yFENTFO8h/view?usp=sharing",
      previewUrl: "/SalesForceAi.pdf",
      downloadUrl: "https://drive.google.com/file/d/1akdx9p_z_rYWuJvdKZ1DcG8yFENTFO8h/view?usp=sharing",
    },
    {
      title: "Cisco Internship in Networking with Packet Tracer",
      description: "Hands-on internship program focused on networking fundamentals, configuration, and troubleshooting using Cisco Packet Tracer.",
      issuer: "Cisco Systems",
      date: "May 2024",
      verificationUrl: "https://www.netacad.com/certificates/?issuanceId=4813e4b4-8324-4a1b-b173-73d14a85576b",
      previewUrl: "/CiscoNetworks.pdf",
      downloadUrl: "https://drive.google.com/file/d/1O3DTVYssfQtLXIdoxvaIyYTLRurZS4Cq/view?usp=sharing",
    }
  ];



  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="74259da4-37a1-428c-a33c-0b33f562b88d"
            data-share-badge-host="https://www.credly.com"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-400/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-200 mb-2">{cert.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                    <span>{cert.issuer}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{cert.description}</p>

              {/* Certificate Preview */}
              <div className="relative bg-gray-800 rounded-lg p-4 mb-6 h-64 overflow-hidden">
                {cert.previewUrl.endsWith('.jpeg') || cert.previewUrl.endsWith('.jpg') || cert.previewUrl.endsWith('.png') ? (
                  <img
                    src={cert.previewUrl}
                    alt={`${cert.title} Preview`}
                    className="w-full h-full object-cover rounded-lg border border-gray-700"
                    loading="lazy"
                  />
                ) : (
                  <iframe
                    src={cert.previewUrl}
                    title={`${cert.title} Preview`}
                    className="h-full w-[calc(100%+48px)] -mr-12 rounded-lg border border-gray-700"
                    scrolling="no"
                    loading="lazy"
                    style={{
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={cert.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-violet-500/20 text-violet-400 border border-violet-500/30 rounded-lg hover:bg-violet-500/30 transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </a>
                <a
                  href={cert.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-violet-400 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/30 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;