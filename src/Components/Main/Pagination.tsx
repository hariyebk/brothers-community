"use client"

import { PAGE_NUMBERS, PAGE_SIZE, QUERY_PARAMS } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface PaginationProps {
    TotalNumberOfResults: number
}

export default function Pagination({TotalNumberOfResults}: PaginationProps) {

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = parseInt(searchParams.get("page") || "1")
    const {replace} = useRouter()
    const Total_Number_OF_PAGES =  Math.ceil(TotalNumberOfResults / PAGE_SIZE)
    /**
     * A function that chnages the current page into the Next page.
     */
    function handlePreviousPostsPage(){

    }

    /**
     * A function that chnages the current page into the previous page.
     */
    function handleNextPostsPage (){

    }

    /**
     * A function that changes Page number.
     * @param : pageNumber: the  page that the user wants to see
     */
    function handleSetNewPage(pageNumber: number){
        const param = new URLSearchParams(searchParams);
        param.set(QUERY_PARAMS.page, pageNumber.toString());
        // update the URI
        replace(`${pathname}?${param.toString()}`)
    }

    return (
        <section className='w-full mt-14 flex justify-end'>
            <button onClick={handlePreviousPostsPage} className="mr-6">
                <IoIosArrowBack className="w-5 h-5 text-navy" />
            </button>
            <div className="flex items-center gap-5">
                {Total_Number_OF_PAGES === 1 ? null : Array.from({length: Total_Number_OF_PAGES}, (_, index) => index + 1).map((page_number) => {
                    return (
                        <button key={page_number} onClick={() => handleSetNewPage(page_number)}  className={`text-sm text-black ${currentPage === page_number ? "px-4 py-1.5 bg-navy text-white rounded-md" : null}`} > {page_number} </button>
                    )
                })}
            </div>
            <button onClick={handleNextPostsPage} className="ml-6">
                <IoIosArrowForward className="w-5 h-5 text-navy" />
            </button>
        </section>
    )
}
