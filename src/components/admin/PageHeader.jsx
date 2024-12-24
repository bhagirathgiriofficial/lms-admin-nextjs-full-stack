import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

export default function PageHeader({ paths, button }) {
    return (
        <div className="shadow-lg text-white rounded bg-gray-600 p-4 mb-6">
            <div className="flex justify-between items-center">
                <BreadCrum paths={paths} />
                <Link href={button.link} className="duration-200 bg-white border border-transparent hover:border-white hover:bg-gray-600 hover:text-white text-gray-700 px-4 py-2 rounded">
                    {button.text}
                </Link>
            </div>
        </div>
    );
}

const BreadCrum = ({ paths }) => {
    return (
        <nav className="flex items-center text-sm">
            {paths.map((path, index) => (
                <div key={index} className="flex items-center">
                    <span>{path}</span>
                    {index < paths.length - 1 && (
                        <FaChevronRight className="mx-2" />
                    )}
                </div>
            ))}
        </nav>
    );
};