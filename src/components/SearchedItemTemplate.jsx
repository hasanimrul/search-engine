const SearchedItemTemplate = ({ data }) => {

    function createMarkup(html) {
        return { __html: html };
    }

    return <div className="flex flex-col py-3 mb-3 pl-3 rounded-xl hover:shadow-md hover:bg-slate-100">
        <div className="group cursor-pointer"
            onClick={() => window.open(data.link)}>
            <div className=" truncate text-green-700">
                {data.formattedUrl}
            </div>
            <div className="group-hover:underline text-xl font-bold  pt-2">
                {data.title}
            </div>
        </div>
        <div className="text-sm text-[#4d5156] leading-6 pt-1"
            dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
        />
    </div>
};

export default SearchedItemTemplate;
