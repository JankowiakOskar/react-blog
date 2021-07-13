import React from "react";
import { useComments } from "../../hooks/useComments";
import { useParams } from "react-router-dom";
import CommentsSection from "../../components/Comments/Comments";

const CommentsContainer = () => {
	const { id } = useParams();
	const { articleComments } = useComments({ articleId: id });

	return <CommentsSection comments={articleComments} />;
};

export default CommentsContainer;
