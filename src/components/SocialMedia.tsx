
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

const SocialMedia = () => {
  const socialPlatforms = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/2300031018', followers: 'Pranav_Tummala' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/tummalapranav/', followers: 'tummalapranav' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/tummalaPranav', followers: 'tummalaPranav' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/tummala_pranav/', followers: 'tummala_pranav' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow my journey across different platforms and stay updated with my latest work
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 justify-items-center max-w-4xl mx-auto">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:scale-105 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-300 group w-full"
            >
              <platform.icon className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              <h3 className="font-semibold text-gray-200 mb-1">{platform.name}</h3>
              <p className="text-sm text-gray-500">{platform.followers}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;