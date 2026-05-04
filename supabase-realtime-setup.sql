-- Включить Realtime для таблицы reactions
ALTER PUBLICATION supabase_realtime ADD TABLE reactions;

-- Убедиться, что Row Level Security включен
ALTER TABLE reactions ENABLE ROW LEVEL SECURITY;

-- Политика для чтения (все могут читать)
CREATE POLICY "Allow public read access" ON reactions
  FOR SELECT
  USING (true);

-- Политика для вставки/обновления (все могут писать)
CREATE POLICY "Allow public insert/update access" ON reactions
  FOR ALL
  USING (true)
  WITH CHECK (true);
