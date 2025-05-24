type ApiError = {
  data: null;
  ok: false;
  error: string;
};

export default function apiError(error: unknown): ApiError {
  if (error instanceof Error) {
    return { data: null, ok: false, error: error.message };
  } else {
    return { data: null, ok: false, error: 'Erro genérico' };
  }
}
