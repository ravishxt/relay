'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Bot,
  GitBranch,
  Shield,
  Zap,
  Code,
  Workflow,
  Check,
  X,
  Star,
  Sparkles,
  Play,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
} from 'lucide-react';

function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center scroll-animate">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            AI-Powered <span className="gradient-text">Code Agents</span>
            <br />
            for GitHub Workflows
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect powerful AI agents to your GitHub repositories. Deploy,
            test, and iterate in secure sandbox environments with Claude,
            Gemini, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all group"
            >
              Start Building Today
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 scroll-animate">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-3xl opacity-30" />
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center space-x-2 px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-4">
                  Monarch Agent Dashboard
                </span>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Active Agents
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            Claude 3.5
                          </span>
                        </div>
                        <span className="text-xs text-green-600 dark:text-green-400">
                          Optimizing queries
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            Gemini Pro
                          </span>
                        </div>
                        <span className="text-xs text-blue-600 dark:text-blue-400">
                          Code review
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Recent Activity
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-gray-600 dark:text-gray-300">
                        ✓ Fixed 3 performance issues
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        ✓ Updated 12 dependencies
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        ✓ Generated test coverage +15%
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        ✓ Deployed to sandbox environment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Bot,
      title: 'Multi-Model AI Agents',
      description:
        'Deploy Claude, Gemini, GPT-4, and more AI models as specialized code agents for different tasks.',
    },
    {
      icon: GitBranch,
      title: 'GitHub Integration',
      description:
        'Seamlessly connect to your repositories with automatic PR creation and code review workflows.',
    },
    {
      icon: Shield,
      title: 'Secure Sandboxes',
      description:
        'Test and deploy changes in isolated environments before touching production code.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Optimized agents that understand your codebase and execute tasks in seconds, not minutes.',
    },
    {
      icon: Code,
      title: 'Web-Based Interface',
      description:
        'Intuitive dashboard for managing agents, reviewing changes, and monitoring performance.',
    },
    {
      icon: Workflow,
      title: 'Custom Workflows',
      description:
        'Create specialized workflows for testing, deployment, code review, and maintenance tasks.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to integrate AI agents into your development
            workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeDemo() {
  return (
    <section id="demo" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See Monarch in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch how AI agents can optimize your repository in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Web-Based Agent Dashboard
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Real-time Monitoring
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Track agent activity across all your repositories
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Visual Workflows
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Design and manage complex automation pipelines
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Team Collaboration
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Share agents and workflows across your team
                  </p>
                </div>
              </div>
            </div>
            <Button size="lg" className="group">
              <Play className="w-4 h-4 mr-2" />
              Try Interactive Demo
            </Button>
          </div>

          <div className="scroll-animate">
            <div className="bg-gray-900 dark:bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center space-x-2 px-6 py-4 bg-gray-800 dark:bg-gray-900">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-400 ml-4">
                  Monarch Agent Console
                </span>
              </div>
              <div className="p-6">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-green-400">
                    $ Monarch deploy --agent claude-optimizer
                  </div>
                  <div className="text-gray-400">
                    → Analyzing repository structure...
                  </div>
                  <div className="text-gray-400">
                    → Identifying performance bottlenecks...
                  </div>
                  <div className="text-blue-400">
                    ✓ Found 12 optimization opportunities
                  </div>
                  <div className="text-gray-400">
                    → Generating pull request...
                  </div>
                  <div className="text-green-400">
                    ✓ PR #142 created: "Optimize database queries"
                  </div>
                  <div className="text-gray-400">
                    → Running tests in sandbox...
                  </div>
                  <div className="text-green-400">
                    ✓ All tests passing (2.3s faster)
                  </div>
                  <div className="text-yellow-400">
                    → Awaiting review approval...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does Monarch integrate with my existing GitHub workflow?',
      answer:
        'Monarch connects seamlessly with GitHub through our secure API integration. Your agents can read repository structure, create pull requests, review code, and run tests - all while respecting your existing branch protection rules and team permissions.',
    },
    {
      question: 'Which AI models are supported?',
      answer:
        'We support all major AI models including Claude 3.5, GPT-4, Gemini Pro, and specialized coding models. You can assign different models to different tasks - use Claude for code review, GPT-4 for documentation, and Gemini for testing.',
    },
    {
      question: 'How secure are the sandbox environments?',
      answer:
        'Our sandbox environments are completely isolated from your production systems. Each agent runs in a containerized environment with limited permissions, and all changes are reviewed before any production deployment.',
    },
    {
      question: 'Can I customize the AI agents for my specific codebase?',
      answer:
        "Yes! Monarch agents learn from your codebase patterns, coding standards, and previous changes. You can also create custom workflows, set specific rules, and train agents on your team's best practices.",
    },
    {
      question: 'What happens to my code and data?',
      answer:
        "Your code never leaves your control. We use secure, encrypted connections and don't store your source code. All processing happens in temporary, isolated environments that are destroyed after each task.",
    },
    {
      question: 'How do I get started with Monarch?',
      answer:
        'Simply sign up for a free trial, connect your GitHub account, and deploy your first agent. Our onboarding wizard will guide you through setting up your first automated workflow in under 5 minutes.',
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about Monarch
          </p>
        </div>

        <div className="space-y-4 scroll-animate">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                type="button"
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-2xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const comparisons = [
    {
      feature: 'Multi-AI Model Support',
      Monarch: true,
      traditional: false,
      description: 'Access Claude, GPT-4, Gemini, and more specialized models',
    },
    {
      feature: 'Web-Based Interface',
      Monarch: true,
      traditional: false,
      description: 'Intuitive dashboard vs complex CLI commands',
    },
    {
      feature: 'Secure Sandbox Testing',
      Monarch: true,
      traditional: false,
      description: 'Test changes safely before production deployment',
    },
    {
      feature: 'GitHub Integration',
      Monarch: true,
      traditional: true,
      description: 'Both support repository connections',
    },
    {
      feature: 'Team Collaboration',
      Monarch: true,
      traditional: false,
      description: 'Share agents and workflows across teams',
    },
    {
      feature: 'Setup Complexity',
      Monarch: false,
      traditional: true,
      description: 'Minutes vs hours of configuration',
      reverse: true,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Monarch?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how Monarch compares to traditional development tools
          </p>
        </div>

        <div className="scroll-animate">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 bg-gray-50 dark:bg-gray-700 text-center py-6">
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                Feature
              </div>
              <div className="text-primary font-semibold">Monarch</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                Traditional Tools
              </div>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={item.feature}
                className="grid grid-cols-3 items-center py-6 px-6 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
              >
                <div>
                  <div className="font-medium text-gray-900 dark:text-white mb-1">
                    {item.feature}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </div>
                </div>
                <div className="text-center">
                  {item.reverse ? (
                    !item.Monarch ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )
                  ) : item.Monarch ? (
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {item.reverse ? (
                    !item.traditional ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )
                  ) : item.traditional ? (
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Senior Developer at TechCorp',
      avatar: '/api/placeholder/60/60',
      content:
        'Monarch has revolutionized our development workflow. The AI agents catch issues we would have missed and deploy fixes faster than our entire team could manually.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      title: 'CTO at StartupXYZ',
      avatar: '/api/placeholder/60/60',
      content:
        'The web-based interface makes it so easy to manage multiple repositories. Our team productivity increased by 40% in the first month.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      title: 'Lead Engineer at DevShop',
      avatar: '/api/placeholder/60/60',
      content:
        'The secure sandbox testing gives us confidence to experiment. We can try aggressive optimizations without fear of breaking production.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Development Teams
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See what developers are saying about Monarch
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 scroll-animate"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={_}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        '5 active AI agents',
        '3 repositories',
        'Basic GitHub integration',
        'Community support',
        'Web dashboard access',
      ],
      popular: false,
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Best for growing development teams',
      features: [
        '20 active AI agents',
        'Unlimited repositories',
        'Advanced GitHub integration',
        'Team collaboration tools',
        'Priority support',
        'Custom workflows',
        'Sandbox environments',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited AI agents',
        'Unlimited repositories',
        'Enterprise GitHub integration',
        'Advanced security controls',
        'Dedicated support',
        'Custom AI models',
        'On-premise deployment',
        'SLA guarantee',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your team size and needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 scroll-animate border ${
                plan.popular
                  ? 'border-primary ring-2 ring-primary/20 relative'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center space-x-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                }`}
                size="lg"
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-animate">
          <p className="text-gray-600 dark:text-gray-300">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-purple-500/5 to-primary/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="scroll-animate">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Early Access Available</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your
            <br />
            <span className="gradient-text">Development Workflow?</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of developers already using AI agents to ship better
            code faster. Start your free trial today.
          </p>

          {/* <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center"
              required
            />
            <Input
              type="text"
              placeholder="Company (optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="text-center"
            />
            <Button 
              type="submit"
              size="lg"
              className="w-full group"
              disabled={signupMutation.isPending}
            >
              {signupMutation.isPending ? "Signing up..." : "Get Early Access"}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form> */}

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'API', href: '#' },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    support: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Community', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: X, href: '#', label: 'X (Twitter)' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Monarch</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering developers with AI-powered code agents for faster,
              safer development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Monarch. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <CodeDemo />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default Landing;
