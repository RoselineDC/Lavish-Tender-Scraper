import { useRouter } from "next/navigation"; // at top of your component

const router = useRouter(); // inside component

const handleApprove = async (id: number) => {
  const tenderToApprove = tenders.find((tender) => tender.id === id);

  if (tenderToApprove) {
    try {
      const response = await fetch("http://localhost:8000/tenders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tenderToApprove),
      });

      if (response.ok) {
        // ✅ Update local state
        setApprovedTenders((prev) => [...prev, tenderToApprove]);
        setTenders((prev) => prev.filter((t) => t.id !== id));
        setOpenDropdown(null);
        console.log("✅ Approved and sent to /tenders");

        // ✅ Navigate to /tenders dashboard
        router.push("/tenders");
      } else {
        console.error("❌ Failed to send to backend");
      }
    } catch (error) {
      console.error("❌ Error approving tender:", error);
    }
  }
};
