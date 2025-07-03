import NoteView from "@/components/shared/notes/notes-view";
import { Notes } from "@prisma/client";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { addDays, subDays } from "date-fns";

let notesProps: Notes[];

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/notes",
  useParams: () => ({ slug: "bonjour-hello" }),
}));
describe("Notes page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Initialize the config with necessary default date boundaries
    notesProps = [
      {
        id: "9fdf1d34-51d2-4c98-9c8f-aabbccddeeff",
        nativeText: "Bonjour",
        learningText: "Hello",
        pronunciation: "bɔ̃ʒuʁ",
        voiceUrl: "https://example.com/audio/bonjour.mp3",
        noteType: "vocabulary",
        reviewCount: 2,
        lastReviewedAt: subDays(new Date(), 1),
        nextReviewAt: addDays(new Date(), 2),
        ease: 250,
        tags: ["greeting", "basic"],
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
        slug: "bonjour-hello",
      },
    ];
  });
  it("should renders a the Note page when notes are not empty", async () => {
    render(<NoteView notes={notesProps} />);
    const cards = screen.getAllByText(
      (_, element) => element?.getAttribute("data-testid") === "card"
    );

    expect(screen.getByText("Bonjour")).toBeInTheDocument();
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(cards.length).toBe(1);
  });

  it("should renders the Note page with no notes when array is empty", async () => {
    render(<NoteView notes={[]} />);
    const cards = screen.queryAllByText(
      (_, element) => element?.getAttribute("data-testid") === "note-card"
    );
    expect(screen.getByText("Aucune note pour le moment")).toBeInTheDocument();
    expect(
      screen.getByText("Ajoutez une nouvelle note pour commencer à apprendre.")
    ).toBeInTheDocument();
    expect(cards.length).toBe(0);
  });

  it("should redirect then user to note details when he click on note card", async () => {
    render(<NoteView notes={notesProps} />);
    const card = screen.getByTestId("note-card");
    fireEvent.click(card);
    expect(pushMock).toHaveBeenCalledWith("/notes/bonjour-hello");
  });
});
