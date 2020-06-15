<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Agregator') }}</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <!-- Scripts -->
    <script src="{{ mix('js/builder.js') }}" defer></script>

</head>
<body>
  <div id="app">
    @include('parts.header-small')
    <builder
      :sections="{{ json_encode($sections) }}"
      :data="{{ json_encode($data) }}"
      :template-section="{{ json_encode($templateSection) }}"
      company-alias="{{ $company->alias }}"
      company-logo="{{ FM::url($company->logo) }}"
      company-name="{{ $company->name }}"
      :company-id="{{ $company->id }}"
    ></builder>
    <bid
      :category-id="null"
      :user="null"
      ref="orderForm"
    ></bid>
    <call ref="callForm"></call>
    @include('parts.footer')
  </div>
</body>
</html>
