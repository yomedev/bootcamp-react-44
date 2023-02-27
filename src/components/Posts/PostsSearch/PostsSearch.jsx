import { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { Button } from "../../Button";

import React from "react";

export const PostsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamValue = searchParams.get("search") ?? "";
  const [search, setSearch] = useState(searchParamValue);

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = () => {
    setSearchParams({ search, page: 1 });
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={search}
        onChange={handleChangeSearch}
        className="form-control"
        placeholder="Type to search..."
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
};
