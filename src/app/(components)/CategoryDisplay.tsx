const CategoryDisplay = ({ category }: { category: string }) => {
	return (
	  <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-blue-300 mr-2">
		  { category }
	  </span>
	)
  }
  
  export default CategoryDisplay