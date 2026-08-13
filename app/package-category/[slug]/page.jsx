import AllPackage from "../all-packages";

export default async function PackageCategorySlugPage({ params }) {
    const { slug } = await params;

    return <AllPackage slug={slug} />;
}