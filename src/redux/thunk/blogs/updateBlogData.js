import { toast } from "react-hot-toast";

const UPDATE_CONTENT = (blog, id) => {
    return async () => {
        const resp = await fetch(`https://college-hacks.onrender.com/update-blog/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });
        const data = await resp.json();
        if (data.acknowledged) {
            setTimeout(() => {
                toast.success("Blog updated successfully");
            }, 100);
        }
    };
}

export default UPDATE_CONTENT;