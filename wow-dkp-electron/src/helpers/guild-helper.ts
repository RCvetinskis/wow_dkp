import { authenticatedApi } from "@/lib/api-handler";

export const fetchGuildById = async (id: string | undefined) => {
  try {
    if (!id) return null;
    const { data } = await authenticatedApi.get(`/guild/${id}`);
    return data;
  } catch {
    return null;
  }
};
