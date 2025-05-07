import { Button } from "@/components/ui/button"

export default function InsightsPage() {
  return (
    <>
      <section className="relative py-20 bg-[#0B1F41]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Innovations</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Stay informed with our latest legal insights, articles, and industry updates
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B1F41] mb-4">Our Articles</h2>
            <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Articles will be published soon. Check back for updates on legal insights and industry trends.
            </p>
          </div>

          <div className="flex justify-center">
            <Button className="bg-[#0B1F41] hover:bg-[#0B1F41]/90 text-white">Subscribe to Updates</Button>
          </div>
        </div>
      </section>
    </>
  )
}
