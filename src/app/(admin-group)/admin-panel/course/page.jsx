import DeleteBtn from "@/components/admin/DeleteBtn";
import PageHeader from "@/components/admin/PageHeader";
import ToggleStatusBtn from "@/components/admin/ToggleStatusBtn";
import { getCourses } from "@/library/api-calls";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

async function coursePage() {
    const courses = await getCourses();
    return (
        <div className="bg-white text-gray-800 min-h-screen container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <PageHeader paths={["Dashboard", "Course"]} button={{ text: "Add", link: "/admin-panel/course/add" }} />
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Sr. No.
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Course Name / Slug
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Fees
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, index) => (
                                    <tr key={course.id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{course.title} <br /> {course.slug}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-600 whitespace-no-wrap">
                                                Original Fee  ₹{course.original_fee}
                                                <br />
                                                Discounted Fee  ₹{course.discounted_fee}
                                            </p>
                                        </td>
                                        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-600 whitespace-no-wrap">{course.description}</p>
                                        </td> */}
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-600 whitespace-no-wrap">{course.image}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <ToggleStatusBtn endpoint="/course/change-status" id={course._id} current_status={course.status} />
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                            <div className="flex justify-center">
                                                <Link href={"/admin-panel/course/edit/" + course._id} className="text-blue-500 hover:text-blue-700 mr-3">
                                                    <FaEdit />
                                                </Link>
                                                <DeleteBtn endpoint={`/course/delete/${course._id}`} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default coursePage;