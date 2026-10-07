import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { DOCUMENTATION } from './DOCUMENTATION.tsx';
import { useState } from 'react';

function Header () {
  const [search, setSearch] = useState("");

  const { id } = useParams()
  const currentIndex = DOCUMENTATION.findIndex(
    article => article.id === id
  );

  return <div>
    <Link to={'/'}> All articles </Link>
  </div>
}