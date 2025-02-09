import React from 'react'

export default function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg bg-white p-4 transition duration-300 ease-in-out transform hover:bg-blue-100">
      <div className="relative">
      <span className="absolute -top-2.5 -left-1.5 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10">
          {source}
      </span>

      {imageUrl && (
        <img className="w-full h-64 object-cover rounded-lg" src={imageUrl} alt={title} />
      )}
      </div>
      <div className="px-2 py-2 flex-1">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-2 mt-auto mb-1">
        <p className='text-gray-900'>By {author? author : "Unknown"} on {new Date(date).toDateString()}</p>
      </div>
      <div className="px-2 pt-2 pb-1 mt-auto">
        <a
          href={newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Read More
        </a>
      </div>
    </div>
    );
}
