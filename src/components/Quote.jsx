import { RefreshCw } from 'lucide-react'
import { useEffect, useState } from 'react'

const Quote = () => {
  const [quote, setQuote] = useState(null)

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuote(data))
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <>
      {quote && (
        <section className="flex gap-3 max-w-5xl">
          <div>
            <p>&quot;{quote.content}&quot;</p>
            <p className="font-bold text-3xl text-yellow-500">
              - {quote.author}
            </p>
          </div>
          <button
            onClick={fetchQuote}
            className="transition duration-300 hover:text-yellow-500"
          >
            <RefreshCw size={'1.7rem'} />
          </button>
        </section>
      )}
    </>
  )
}

export default Quote
