<table>
    <thead>

        <tr>
            @foreach($sections as $section)
                @foreach($section->questions as $question)
                @switch($question->type)
                    @case('M')
                        @foreach($question->options as $key=>$option)
                            <th>{{ $section->code }}{{ $question->code }}_{{ $key + 1 }}</th>
                        @endforeach
                        @break
                    @case('U')
                        <th>{{ $section->code }}{{ $question->code }}</th>

                        @foreach($question->options as $option)
                        @if(strpos($option->text, 'Otro') !== false || strpos($option->text, 'Otra') !== false)
                                <th>{{ $section->code }}{{ $question->code }}_OTRO</th>
                        @endif
                        @endforeach
                    @break
                    @default
                    <th>{{ $section->code }}{{ $question->code }}</th>

                    @endswitch
                @endforeach
            @endforeach
        </tr>
    </thead>
<tbody>
    <tr>
        @foreach($sections as $section)
            @foreach($section->questions as $question)
            @switch($question->type)
                @case('M')
                    @foreach($question->options as $key=>$option)
                        <th>{{ $section->code }}{{ $question->code }}_{{ $key + 1 }}</th>
                    @endforeach
                    @break
                @case('U')
                    <th>{{ $section->code }}{{ $question->code }}</th>

                    @foreach($question->options as $option)
                    @if(strpos($option->text, 'Otro') !== false || strpos($option->text, 'Otra') !== false)
                            <th>{{ $section->code }}{{ $question->code }}_OTRO</th>
                    @endif
                    @endforeach
                @break
                @default
                <th>$question->answer[0]->value</th>

                @endswitch
            @endforeach
        @endforeach
    </tr>

</tbody>
</table>
