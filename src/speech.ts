export type TranscriptEvent = {
  kind: "transcript";
  payload: {
    id: string;
    sentence_id: string;
    text: string;
    latency: number;
    speaker: string;
    created_at: number;
    from_ms: number;
    to_ms: number;
  };
};

export type PartialEvent = {
  kind: "partial";
  payload: {
    id: string;
    text: string;
    latency: number;
  };
};

export type TranslationEvent = {
  kind: "translation";
  payload: {
    id: string;
    sentence_id: string;
    text: string;
    original: string;
    latency: number;
    speaker: string;
    created_at: number;
    from_ms: number;
    to_ms: number;
  };
};

export type VoiceoverEvent = {
  kind: "voiceover";
  payload: {
    id: string;
    text: string;
    original: string;
    latency: number;
    speaker: string;
    created_at: number;
    playback_uri: string;
    from_ms: number;
    to_ms: number;
  };
};

export type VoiceEvent = {
  kind: "voice";
  payload: {
    id: string;
    sentence_id: string;
    text: string;
    latency: number;
    speaker: string;
    created_at: number;
    audio: string; // base64 encoded audio
    seq: number;
    from_ms: number;
    to_ms: number;
  };
};

export type EndOfStreamEvent = {
  kind: "end_of_stream";
  payload: {
    reason: string;
  };
};

export interface WebSocketMessage {
  events: Array<
    | TranscriptEvent
    | PartialEvent
    | TranslationEvent
    | VoiceoverEvent
    | VoiceEvent
    | EndOfStreamEvent
  >;
}
