import { GetServerSideProps } from "next";
import { services } from "../../services/services";
import { useMemo } from "react";
import { ParsedUrlQuery } from "querystring";

export const getServerSideProps = (async (context) => {
  return { props: context.params! };
}) satisfies GetServerSideProps<ParsedUrlQuery>

interface Props {
  slug: string;
}

export default function Service({ slug }: Props) {
  const service = useMemo(() => {
    return services.get(slug);
  }, [slug]);

  return (
    <>
      {JSON.stringify(service)}
    </>
  )
}