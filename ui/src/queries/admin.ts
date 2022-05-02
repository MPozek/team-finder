import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { PostApiResult, postFromApiResult, Post } from "../model/post";
import { useApiRequest } from "../utils/apiRequest";

const REPORTED_POSTS_QUERY_KEY = ["admin", "reports"] as const;
const DELETE_POST_MUTATION_KEY = ["admin", "posts", "delete"] as const;

export function useReportedPostsList(
  opts?: UseQueryOptions<
    PostApiResult[],
    Error,
    Post[],
    typeof REPORTED_POSTS_QUERY_KEY
  >
): UseQueryResult<Post[], Error> {
  const apiRequest = useApiRequest();

  return useQuery(
    REPORTED_POSTS_QUERY_KEY,
    () => {
      return apiRequest<PostApiResult[]>(`/admin/reports`);
    },
    {
      ...opts,
      select: (posts: PostApiResult[]) => posts.map(postFromApiResult),
    }
  );
}

interface DeletePostVariables {
  postId: number;
}
export function useDeletePost(
  opts?: UseMutationOptions<void, Error, DeletePostVariables, unknown>
): UseMutationResult<void, Error, DeletePostVariables, unknown> {
  const apiRequest = useApiRequest();
  const queryClient = useQueryClient();

  return useMutation({
    ...opts,
    mutationFn: async (variables) => {
      return apiRequest<void>("/admin/post", {
        method: "DELETE",
        body: { postId: variables.postId },
      });
    },
    mutationKey: DELETE_POST_MUTATION_KEY,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["posts", "list"]);
      queryClient.invalidateQueries(REPORTED_POSTS_QUERY_KEY);
      opts?.onSuccess?.(data, variables, context);
    },
  });
}
