import "../node_modules/fauna-design-system/dist/style.css"
import { Navbar, Card, Pagination } from "../node_modules/fauna-design-system/dist/fauna-design-system"

const App = () => {
  return (
    <>
      <Navbar 
        primaryButtonProps={{
        children: "Sign Up",
        onClick: () => {},
        variant: "hovered",
        size: "small",
        }}
        logo="My Blog App" 
      />

      <div className="flex align-center justify-between">
          <Card
            variant="withImageButton"
            title="Blog Title"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            imageUrl="https://via.placeholder.com/400x200"
          />

          <Card
            variant="withImageButton"
            title="Blog Title"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            imageUrl="https://via.placeholder.com/400x200"
          />

          <Card
            variant="withImageButton"
            title="Blog Title"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            imageUrl="https://via.placeholder.com/400x200"
          />
      </div>

      <Pagination currentPage={1} totalPages={5} onPageChange={page => console.log("Page changed to:", page)}  />
    </>
  )
}

export default App