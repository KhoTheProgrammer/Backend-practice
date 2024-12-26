import { useEffect, useState } from "react";

const Todo = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const [feedback, setFeedback] = useState(""); // New feedback state
  const [posts, setposts] = useState([]);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    settitle(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setcontent(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); // Set loading to true when the post request starts
    setFeedback(""); // Clear any previous feedback

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, content: content }),
      });

      if (response.ok) {
        setFeedback("Post successfully created!"); // Success feedback
      } else {
        setFeedback("Failed to create post."); // Error feedback
      }
    } catch (error) {
      console.log(error);
      setFeedback("Error: Could not post."); // Network error feedback
    } finally {
      setLoading(false); // Set loading to false when request finishes
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setposts(data));
  }, []);

  console.log(posts);
  

  return (
    <div className="">
      <div className=" bg-gry-400 mx-12 shadow-lg flex-col flex justify-center items-center h-screen">
        <form className=" flex gap-x-4 flex-col w-1/2" onSubmit={handleSubmit}>
          <div className=" mb-4">
            <label className="">Title</label>
            <br></br>
            <input
              type="text"
              name="title"
              id=""
              placeholder="Title here..."
              className=" rounded-md"
              onChange={handleTitle}
              value={title}
            />
          </div>

          <div className=" mb-4">
            <label>Content</label>
            <br></br>
            <input
              type="text"
              name="content"
              id=""
              placeholder="Content here.."
              onChange={handleContent}
              value={content}
            />
          </div>

          <button
            type="submit"
            className=" bg-green-500 p-2 text-white rounded-md"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Posting..." : "Post"}{" "}
            {/* Button text changes based on loading state */}
          </button>
        </form>

        {/* Feedback message */}
        {feedback && (
          <div className="mt-4 text-center">
            <p>{feedback}</p>
          </div>
        )}
        <div>{
          posts.map(item => (<p>{item.content}</p>))
          }</div>
      </div>
    </div>
  );
};

export default Todo;
