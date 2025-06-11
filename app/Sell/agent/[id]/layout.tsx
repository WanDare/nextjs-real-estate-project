export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Renders ONLY the form content, no navbar/footer from root/layout
  return <>{children}</>;
}
