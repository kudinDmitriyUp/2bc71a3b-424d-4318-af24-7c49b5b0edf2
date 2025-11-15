"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, Crown, DollarSign, HelpCircle, Rocket, Sparkles, Star, TrendingUp, Twitter, Instagram, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="aurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="OnlyFans Creator Hub"
          button={{
            text: "Start Creating",
            href: "https://onlyfans.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Monetize Your Content Like Never Before"
          description="Transform your passion into profit with powerful creator tools, advanced analytics, and direct fan engagement on the world's leading content platform"
          tag="Creator Platform"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Earning Today",
              href: "https://onlyfans.com/signup"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241745777-gfx67hwb.jpg"
          imageAlt="Content creator dashboard interface"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Empowering Creators Worldwide"
          description={[
            "Join millions of content creators who have transformed their lives through our platform. We provide the tools, audience, and revenue streams you need to build a sustainable creative business.",
            "From exclusive content subscriptions to direct fan interactions, our platform puts creators first with industry-leading creator earnings and comprehensive support systems."
          ]}
          buttons={[
            {
              text: "Join Creator Community",
              href: "https://onlyfans.com/signup"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Creator-First Features"
          description="Everything you need to build, grow, and monetize your content creation business"
          tag="Platform Features"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Advanced Analytics",
              description: "Track your earnings, audience growth, and content performance with detailed insights and real-time data",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241747270-s21u6ln3.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              title: "Multiple Revenue Streams",
              description: "Subscriptions, tips, custom content, and live streams - maximize your earning potential with diverse monetization options",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241747950-vazoycdg.jpg",
              imageAlt: "Revenue streams illustration"
            },
            {
              title: "Direct Fan Engagement",
              description: "Build deeper connections with your audience through messaging, custom requests, and exclusive content experiences",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241748635-bhnia5j1.jpg",
              imageAlt: "Fan engagement interface"
            },
            {
              title: "Content Management Suite",
              description: "Upload, organize, and schedule your content with our intuitive creator dashboard and automated posting tools",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241749372-9ekp9yz5.jpg",
              imageAlt: "Content management dashboard"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Creator Earnings"
          description="Keep more of what you earn with our creator-friendly revenue sharing"
          tag="Transparent Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "standard",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "80%",
              subtitle: "You keep 80% of all earnings",
              features: [
                "Direct fan subscriptions",
                "Custom content requests",
                "Messaging and tips",
                "Basic analytics dashboard",
                "Standard creator support"
              ]
            },
            {
              id: "premium",
              badge: "Creator Pro",
              badgeIcon: Crown,
              price: "85%",
              subtitle: "Higher earnings for top creators",
              features: [
                "Premium revenue share rate",
                "Advanced analytics suite",
                "Priority customer support",
                "Early access to new features",
                "Dedicated account manager"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Platform Impact"
          description="Join a thriving community of successful content creators"
          tag="Success Stats"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "170M+",
              description: "Registered Users Worldwide"
            },
            {
              id: "2",
              value: "1.5M+",
              description: "Active Content Creators"
            },
            {
              id: "3",
              value: "$5.5B+",
              description: "Total Creator Earnings"
            },
            {
              id: "4",
              value: "99.9%",
              description: "Platform Uptime Guarantee"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Get answers to common questions about creating content and earning on our platform"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241750060-zq0qwj1p.jpg"
          imageAlt="Creator support consultation"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "How much can I earn as a content creator?",
              content: "Creator earnings vary based on audience size, content quality, and engagement. Our top creators earn six and seven figures annually. You keep 80-85% of all earnings, with no hidden fees or caps on your potential income."
            },
            {
              id: "2",
              title: "What type of content can I create?",
              content: "You can create any legal adult content including photos, videos, live streams, and custom content. We support various formats and provide tools for content organization, scheduling, and audience targeting."
            },
            {
              id: "3",
              title: "How do I get paid and when?",
              content: "Creators receive weekly payouts via direct deposit, international wire transfer, or other supported payment methods. Minimum payout is $20, and all transactions are secure and confidential."
            },
            {
              id: "4",
              title: "Is my privacy and security protected?",
              content: "Absolutely. We use bank-level security, offer anonymous payment options, and provide comprehensive privacy controls. You control who sees your content and personal information is never shared."
            },
            {
              id: "5",
              title: "What support is available for creators?",
              content: "We offer 24/7 creator support, comprehensive tutorials, community forums, and dedicated account managers for top-performing creators. Our success team helps optimize your content strategy and earnings."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Creator Success Stories"
          description="Learn from successful creators and discover strategies to grow your content business"
          tag="Success Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Success Story",
              title: "From Zero to Six Figures in 12 Months",
              excerpt: "How Sarah transformed her hobby into a thriving content creation business using strategic content planning and audience engagement",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241750818-xhq5h8lf.jpg",
              imageAlt: "Successful content creator",
              authorName: "Sarah Johnson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241750818-xhq5h8lf.jpg",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "Strategy",
              title: "Building Your Creator Brand",
              excerpt: "Essential tips for developing a unique brand identity that resonates with your target audience and drives subscriber growth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241746532-xr70vwnz.jpg",
              imageAlt: "Creator branding workspace",
              authorName: "Marketing Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241746532-xr70vwnz.jpg",
              date: "Dec 10, 2024"
            },
            {
              id: "3",
              category: "Tutorial",
              title: "Maximizing Your Earnings Potential",
              excerpt: "Advanced strategies for diversifying revenue streams, optimizing pricing, and building long-term subscriber relationships",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241747950-vazoycdg.jpg",
              imageAlt: "Earnings optimization",
              authorName: "Creator Success",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241747950-vazoycdg.jpg",
              date: "Dec 5, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Start Your Creator Journey?"
          description="Join thousands of successful content creators who have transformed their passion into profit. Sign up today and start earning within 24 hours."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email to get started"
          buttonText="Join Now"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. 18+ only."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763241750818-xhq5h8lf.jpg"
          imageAlt="Content creator getting started"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="OnlyFans Creator Hub"
          copyrightText="© 2024 OnlyFans Creator Hub. All rights reserved."
          columns={[
            {
              title: "Platform",
              items: [
                { label: "How it Works", href: "about" },
                { label: "Creator Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Success Stories", href: "blog" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "faq" },
                { label: "Creator Guide", href: "https://help.onlyfans.com" },
                { label: "Contact Us", href: "contact" },
                { label: "Community Forum", href: "https://forum.onlyfans.com" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "https://onlyfans.com/terms" },
                { label: "Privacy Policy", href: "https://onlyfans.com/privacy" },
                { label: "Cookie Policy", href: "https://onlyfans.com/cookies" },
                { label: "DMCA Policy", href: "https://onlyfans.com/dmca" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/onlyfans",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/onlyfans",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/onlyfans",
              ariaLabel: "Subscribe to our YouTube channel"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}